import { Prop, Schema , SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from '@nestjs/swagger';
import { Version } from "src/versions/version.schema";
import { Document, Schema as MongooseSchema } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema()
export class Project {
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
  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: Version.name }])
  versions?: Version[]
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
