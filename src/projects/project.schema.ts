import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from '@nestjs/swagger';
import { Version } from "src/versions/version.schema";

export type ProjectDocument = Project & Document;

@Schema()
export class Project {

  id: string;

  @ApiProperty({
    example: 'Project Name',
    description: 'The project name'
  })
  @Prop()
  name: string;

  @ApiProperty({
    example: 'Project Description',
    description: 'The project description'
  })
  @Prop()
  description: string;

  @ApiProperty({
    example: 'Version',
    description: 'Version description'
  })
  @Prop()
  versions?: Version[]
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
