import { useSQLiteContext } from "expo-sqlite/next"

export type UserCreateDatabase = {
    name: string
    email: string
    password: string
}

export type UserResponseDatabase = {
    id: string
    name: string
    email: string
    password: string
    current: number
}

export type IdSearchDatabase = {
    id: string
}

export function useUserRepository() {
    const database = useSQLiteContext()

    function create(user: UserCreateDatabase) {
        try {
            const statement = database.prepareSync(
                "INSERT INTO tb_test (name, email, password) VALUES ($name, $email, $password)"
            )
            try {
                statement.executeSync({
                    $name: user.name,
                    $email: user.email,
                    $password: user.password
                })
            } finally {
                statement.finalizeAsync();
                console.log("usuario criado")
            }
        } catch (error) {
            throw console.log("Erro ao cadastrar:" + error)
        }
    }

    function all() {
        try {
            return database.getAllSync<UserResponseDatabase>(`SELECT * FROM tb_test`)
        } catch (error) {
            throw console.log("Erro ao trazer a lista:" + error)
        }
    }

    function deleted(id: IdSearchDatabase) {
        try {
            const statement = database.prepareSync(`DELETE FROM tb_test WHERE id = $id`)
            try{statement.executeSync({
                $id: id.id
            })}finally{
                statement.finalizeAsync();
                console.log("usuario deletado")
            }
        } catch (error) {
            throw console.log("Erro ao deletar:" + error)
        }
    }

    return {
        create,
        all,
        deleted,
    }
}