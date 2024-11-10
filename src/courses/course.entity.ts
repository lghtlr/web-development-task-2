import { ApiProperty } from "@nestjs/swagger";

export class Course {

    constructor(id: number, name: string, description: string) {
        this.id = id,
        this.name = name,
        this.description = description;
    }
    
    @ApiProperty()
    id: number;
    
    @ApiProperty()
    name: string;

    @ApiProperty()
    description: string;
}