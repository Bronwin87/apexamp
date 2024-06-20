/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsBoolean,
  IsOptional,
  ValidateNested,
  IsString,
} from "class-validator";
import { LobbyWhereUniqueInput } from "../../lobby/base/LobbyWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class TeamUpdateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isConfirmed?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => LobbyWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => LobbyWhereUniqueInput)
  @IsOptional()
  @Field(() => LobbyWhereUniqueInput, {
    nullable: true,
  })
  lobby?: LobbyWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { TeamUpdateInput as TeamUpdateInput };
