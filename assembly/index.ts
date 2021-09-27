// @nearfile
import { context, storage, logging } from "near-sdk-as";


import { LAST_SENDER_KEY } from "./model"


export function sayHi(): void {
  
  const sender = context.sender;
  
  logging.log(sender + " says \"Hi!\"");
 
  storage.setString(LAST_SENDER_KEY, sender);
}

export function whoSaidHi(): string | null {

  return storage.getString(LAST_SENDER_KEY);
}

export function njknj(){
  
}