export const API = {
    default: 'http://agdatabox.md.utfpr.edu.br:8080/quadro-api/api/'
}

export function getDefaultUrl(resource: string): string {
    return API.default + resource;
}