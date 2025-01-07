export interface Chat {
  role: "system" | "user" | "assistant";
  content: string;
  time: string;
}

export interface storedChat {
  time: string;
  heading: string;
}
