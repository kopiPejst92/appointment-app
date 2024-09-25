export interface Command {
    id: number
    framework: string
    content: string
    flags:string[]
    syntax: Map<string,string[]> 
    purpose:string
}
