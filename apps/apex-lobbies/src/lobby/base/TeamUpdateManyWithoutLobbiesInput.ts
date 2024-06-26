/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TeamWhereUniqueInput } from "../../team/base/TeamWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class TeamUpdateManyWithoutLobbiesInput {
  @Field(() => [TeamWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TeamWhereUniqueInput],
  })
  connect?: Array<TeamWhereUniqueInput>;

  @Field(() => [TeamWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TeamWhereUniqueInput],
  })
  disconnect?: Array<TeamWhereUniqueInput>;

  @Field(() => [TeamWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TeamWhereUniqueInput],
  })
  set?: Array<TeamWhereUniqueInput>;
}

export { TeamUpdateManyWithoutLobbiesInput as TeamUpdateManyWithoutLobbiesInput };
