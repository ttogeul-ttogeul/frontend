"use server";

import API from "..";
import { RootResponse } from "./types";

export const fetchRoot = async () => {
  const { message } = await API.get<RootResponse>("/");
  return message;
};
