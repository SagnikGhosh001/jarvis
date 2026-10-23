import { SqliteSaver } from "@langchain/langgraph-checkpoint-sqlite";
import Database from "libsql";

const db = new Database("data/jarvis-checkpoints.db");

export const checkpointer = new SqliteSaver(db);
