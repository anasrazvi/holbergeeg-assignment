import { ColumnsMetaInformation, StudyData, Token } from "./Types/Interfaces";

export const getAuthToken = async ():Promise<Token> => {
    let object = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({"token":"string"})
      }
    return fetch("https://api.f3.k.scoreeeg.com/api/v1/account/token", object).then(res => res.json())
}

export const getMetadata = async (token: string):Promise<ColumnsMetaInformation> => {
    let object = {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': token
        }
      }
    return fetch("https://api.f3.k.scoreeeg.com/api/v1/studyList/metaInfo", object).then(res => res.json())
}

export const getStudydata = async (token: string):Promise<StudyData> => {
    let object = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            'Authorization': token
        },
        body: JSON.stringify({"sortCriteria":[{"sortOrder":1,"columnName":"StudyStart","sortDirection":1}]})
      }
      return fetch("https://api.f3.k.scoreeeg.com/api/v1/studyList?PageNumber=1&PageSize=100", object).then(res => res.json())
}