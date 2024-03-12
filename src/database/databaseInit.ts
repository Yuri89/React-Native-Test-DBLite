import { SQLiteDatabase } from "expo-sqlite/next"

export async function databaseInit(database: SQLiteDatabase) {
    await database.execAsync(`
        PRAGMA journal_mode = 'wal';

        CREATE TABLE IF NOT EXISTS tb_test (
            id    INTEGER PRIMARY KEY NOT NULL,
            name  TEXT NOT NULL,
            email TEXT NOT NULL,
            password REAL NOT NULL
        );

    `)
}