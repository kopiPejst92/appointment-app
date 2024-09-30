export interface Command {
    logo: string,
    id: number
    framework: string
    content: string
    flags:string[]
    syntax: Map<string,string[]> 
    purpose:string
}
