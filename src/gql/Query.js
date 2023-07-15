import { gql } from "@apollo/client";

export const LESSONS_QUERY = gql`
  query Lessons {
  lessons {
    createdAt
    id
    lessonName
    publishedAt
    topic
    level
  	content{
      html
    }
    updatedAt
  }
}
`;