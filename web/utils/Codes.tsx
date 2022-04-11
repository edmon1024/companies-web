export function getCode(id: string) {
  switch(id){
    case "name":
      return "nombre"
      break;
    case "description":
      return "descripción"
      break;
    case "ticker":
      return "símbolo"
      break;
    default:
      return id
  }
}

