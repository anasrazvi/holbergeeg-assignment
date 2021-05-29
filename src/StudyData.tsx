export const data =  {
    GetMetadata() {
        return {
          "columnsMetaInformation": [
            {
              "name": {
                "primaryValue": "Study start",
                "secondaryValue": "Study start"
              },
              "dataType": 2,
              "propertyNameInternal": "StudyStart",
              "propertyName": "studyStart",
              "order": 1,
              "isVisible": true,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": false,
              "isACollection": false,
              "width": 170,
              "endPoint": null,
              "isSortable": true
            },
            {
              "name": {
                "primaryValue": "Study length",
                "secondaryValue": "Study length"
              },
              "dataType": 3,
              "propertyNameInternal": "StudyLength",
              "propertyName": "studyLength",
              "order": 2,
              "isVisible": true,
              "isFrozen": false,
              "isSearchable": false,
              "isMultiSelect": false,
              "isCategorical": false,
              "isACollection": false,
              "width": 160,
              "endPoint": null,
              "isSortable": false
            },
            {
              "name": {
                "primaryValue": "Study type",
                "secondaryValue": "Study type"
              },
              "dataType": 4,
              "propertyNameInternal": "StudyType",
              "propertyName": "studyType",
              "order": 3,
              "isVisible": true,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": true,
              "isACollection": false,
              "width": 110,
              "endPoint": "score/api/v1/studyPropertyTypes/2/codes?ageConstraint=all",
              "isSortable": true
            },
            {
              "name": {
                "primaryValue": "Study status",
                "secondaryValue": "Study status"
              },
              "dataType": 4,
              "propertyNameInternal": "StudyStatus",
              "propertyName": "studyStatus",
              "order": 4,
              "isVisible": true,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": true,
              "isACollection": false,
              "width": 140,
              "endPoint": "ToDo",
              "isSortable": true
            },
            {
              "name": {
                "primaryValue": "Name",
                "secondaryValue": "Name"
              },
              "dataType": 5,
              "propertyNameInternal": "Name",
              "propertyName": "name",
              "order": 5,
              "isVisible": true,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": false,
              "isACollection": false,
              "width": 200,
              "endPoint": null,
              "isSortable": true
            },
            {
              "name": {
                "primaryValue": "Patient ID",
                "secondaryValue": "Patient ID"
              },
              "dataType": 5,
              "propertyNameInternal": "IdentityString",
              "propertyName": "identityString",
              "order": 6,
              "isVisible": true,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": false,
              "isACollection": false,
              "width": 124,
              "endPoint": null,
              "isSortable": true
            },
            {
              "name": {
                "primaryValue": "Date of birth",
                "secondaryValue": "Date of birth"
              },
              "dataType": 2,
              "propertyNameInternal": "DateOfBirth",
              "propertyName": "dateOfBirth",
              "order": 7,
              "isVisible": true,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": false,
              "isACollection": false,
              "width": 132,
              "endPoint": null,
              "isSortable": true
            },
            {
              "name": {
                "primaryValue": "Age at the time of study",
                "secondaryValue": "Age at the time of study"
              },
              "dataType": 4,
              "propertyNameInternal": "AgeAtStudy",
              "propertyName": "ageAtStudy",
              "order": 8,
              "isVisible": true,
              "isFrozen": false,
              "isSearchable": false,
              "isMultiSelect": false,
              "isCategorical": false,
              "isACollection": false,
              "width": 160,
              "endPoint": null,
              "isSortable": false
            },
            {
              "name": {
                "primaryValue": "Referrer",
                "secondaryValue": "Referrer"
              },
              "dataType": 5,
              "propertyNameInternal": "Referrer",
              "propertyName": "referrer",
              "order": 9,
              "isVisible": false,
              "isFrozen": false,
              "isSearchable": false,
              "isMultiSelect": false,
              "isCategorical": false,
              "isACollection": false,
              "width": 200,
              "endPoint": null,
              "isSortable": false
            },
            {
              "name": {
                "primaryValue": "Indication for EEG",
                "secondaryValue": "Indication for EEG"
              },
              "dataType": 4,
              "propertyNameInternal": "IndicationForEeg",
              "propertyName": "indicationForEeg",
              "order": 10,
              "isVisible": false,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": true,
              "isACollection": true,
              "width": 160,
              "endPoint": "score/api/v1/studyPropertyTypes/3/codes?ageConstraint=all",
              "isSortable": true
            },
            {
              "name": {
                "primaryValue": "Clinical diagnosis at referral",
                "secondaryValue": "Clinical diagnosis at referral"
              },
              "dataType": 4,
              "propertyNameInternal": "ClinicalDiagnosis",
              "propertyName": "clinicalDiagnosis",
              "order": 11,
              "isVisible": false,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": true,
              "isACollection": true,
              "width": 180,
              "endPoint": "score/api/v1/patientPropertyTypes/2/codes?ageConstraint=all",
              "isSortable": false
            },
            {
              "name": {
                "primaryValue": "Diagnostic significance",
                "secondaryValue": "Diagnostic significance"
              },
              "dataType": 4,
              "propertyNameInternal": "DiagnosticSignificance",
              "propertyName": "diagnosticSignificance",
              "order": 12,
              "isVisible": false,
              "isFrozen": false,
              "isSearchable": false,
              "isMultiSelect": true,
              "isCategorical": true,
              "isACollection": false,
              "width": 280,
              "endPoint": "ToDo",
              "isSortable": true
            },
            {
              "name": {
                "primaryValue": "Clinical comments",
                "secondaryValue": "Clinical comments"
              },
              "dataType": 5,
              "propertyNameInternal": "ClinicalComments",
              "propertyName": "clinicalComments",
              "order": 13,
              "isVisible": false,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": false,
              "isACollection": true,
              "width": 280,
              "endPoint": null,
              "isSortable": false
            },
            {
              "name": {
                "primaryValue": "Summary",
                "secondaryValue": "Summary"
              },
              "dataType": 5,
              "propertyNameInternal": "Summary",
              "propertyName": "summary",
              "order": 14,
              "isVisible": false,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": false,
              "isACollection": false,
              "width": 280,
              "endPoint": null,
              "isSortable": false
            },
            {
              "name": {
                "primaryValue": "Last episode",
                "secondaryValue": "Last episode"
              },
              "dataType": 4,
              "propertyNameInternal": "LastEpisode",
              "propertyName": "lastEpisode",
              "order": 15,
              "isVisible": false,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": true,
              "isACollection": false,
              "width": 140,
              "endPoint": "score/api/v1/patientPropertyTypes/8/codes?ageConstraint=all",
              "isSortable": true
            },
            {
              "name": {
                "primaryValue": "Episode frequency",
                "secondaryValue": "Episode frequency"
              },
              "dataType": 4,
              "propertyNameInternal": "EpisodeFrequency",
              "propertyName": "episodeFrequency",
              "order": 16,
              "isVisible": false,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": true,
              "isACollection": false,
              "width": 160,
              "endPoint": "score/api/v1/patientPropertyTypes/4/codes?ageConstraint=all",
              "isSortable": true
            },
            {
              "name": {
                "primaryValue": "Medication",
                "secondaryValue": "Medication"
              },
              "dataType": 4,
              "propertyNameInternal": "Medication",
              "propertyName": "medication",
              "order": 17,
              "isVisible": false,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": true,
              "isACollection": false,
              "width": 280,
              "endPoint": "score/api/v1/patientPropertyTypes/9/codes?ageConstraint=all",
              "isSortable": false
            },
            {
              "name": {
                "primaryValue": "Brain MRI/CT",
                "secondaryValue": "Brain MRI/CT"
              },
              "dataType": 4,
              "propertyNameInternal": "BrainMriCt",
              "propertyName": "brainMriCt",
              "order": 18,
              "isVisible": false,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": true,
              "isACollection": false,
              "width": 160,
              "endPoint": "score/api/v1/patientPropertyTypes/1/codes?ageConstraint=all",
              "isSortable": true
            },
            {
              "name": {
                "primaryValue": "Functional Neuroimaging",
                "secondaryValue": "Functional Neuroimaging"
              },
              "dataType": 4,
              "propertyNameInternal": "FunctionalNeuroimaging",
              "propertyName": "functionalNeuroimaging",
              "order": 19,
              "isVisible": false,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": true,
              "isACollection": false,
              "width": 180,
              "endPoint": "score/api/v1/patientPropertyTypes/5/codes?ageConstraint=all",
              "isSortable": true
            },
            {
              "name": {
                "primaryValue": "Medication during the study",
                "secondaryValue": "Medication during the study"
              },
              "dataType": 4,
              "propertyNameInternal": "MedicationAdministeredDuringTheRecording",
              "propertyName": "medicationAdministeredDuringTheRecording",
              "order": 20,
              "isVisible": false,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": true,
              "isACollection": false,
              "width": 200,
              "endPoint": "score/api/v1/patientPropertyTypes/10/codes?ageConstraint=all",
              "isSortable": false
            },
            {
              "name": {
                "primaryValue": "Medication withdrawal",
                "secondaryValue": "Medication withdrawal"
              },
              "dataType": 4,
              "propertyNameInternal": "MedicationWithdrawal",
              "propertyName": "medicationWithdrawal",
              "order": 21,
              "isVisible": false,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": true,
              "isACollection": false,
              "width": 180,
              "endPoint": "score/api/v1/patientPropertyTypes/11/codes?ageConstraint=all",
              "isSortable": false
            },
            {
              "name": {
                "primaryValue": "Latest meal",
                "secondaryValue": "Latest meal"
              },
              "dataType": 2,
              "propertyNameInternal": "LatestMeal",
              "propertyName": "latestMeal",
              "order": 22,
              "isVisible": false,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": false,
              "isACollection": false,
              "width": 140,
              "endPoint": null,
              "isSortable": true
            },
            {
              "name": {
                "primaryValue": "Alertness",
                "secondaryValue": "Alertness"
              },
              "dataType": 4,
              "propertyNameInternal": "Alertness",
              "propertyName": "alertness",
              "order": 23,
              "isVisible": false,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": true,
              "isACollection": false,
              "width": 160,
              "endPoint": "score/api/v1/studyPropertyTypes/1/codes?ageConstraint=all",
              "isSortable": false
            },
            {
              "name": {
                "primaryValue": "Study end",
                "secondaryValue": "Study end"
              },
              "dataType": 2,
              "propertyNameInternal": "StudyEnd",
              "propertyName": "studyEnd",
              "order": 24,
              "isVisible": false,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": false,
              "isACollection": false,
              "width": 170,
              "endPoint": null,
              "isSortable": true
            },
            {
              "name": {
                "primaryValue": "External database",
                "secondaryValue": "External database"
              },
              "dataType": 5,
              "propertyNameInternal": "ExternalDatabase",
              "propertyName": "externalDatabase",
              "order": 25,
              "isVisible": false,
              "isFrozen": false,
              "isSearchable": true,
              "isMultiSelect": false,
              "isCategorical": false,
              "isACollection": false,
              "width": 180,
              "endPoint": null,
              "isSortable": true
            },
            {
              "name": {
                "primaryValue": "Gestational age",
                "secondaryValue": "Gestational age"
              },
              "dataType": 4,
              "propertyNameInternal": "PostmenstrualAge",
              "propertyName": "postmenstrualAge",
              "order": 27,
              "isVisible": false,
              "isFrozen": false,
              "isSearchable": false,
              "isMultiSelect": false,
              "isCategorical": false,
              "isACollection": false,
              "width": 160,
              "endPoint": null,
              "isSortable": false
            },
            {
              "name": {
                "primaryValue": "Corrected age",
                "secondaryValue": "Corrected age"
              },
              "dataType": 4,
              "propertyNameInternal": "CorrectedAgeAtStudy",
              "propertyName": "correctedAgeAtStudy",
              "order": 28,
              "isVisible": false,
              "isFrozen": false,
              "isSearchable": false,
              "isMultiSelect": false,
              "isCategorical": false,
              "isACollection": false,
              "width": 160,
              "endPoint": null,
              "isSortable": false
            },
            {
              "name": {
                "primaryValue": "Postmenstrual age",
                "secondaryValue": "Postmenstrual age"
              },
              "dataType": 4,
              "propertyNameInternal": "PostMenstrualAgeAtStudy",
              "propertyName": "postMenstrualAgeAtStudy",
              "order": 29,
              "isVisible": false,
              "isFrozen": false,
              "isSearchable": false,
              "isMultiSelect": false,
              "isCategorical": false,
              "isACollection": false,
              "width": 160,
              "endPoint": null,
              "isSortable": false
            }
          ],
          "filterCriteria": null,
          "sortCriteria": [
            {
              "sortOrder": 1,
              "columnName": "StudyStart",
              "sortDirection": 1
            }
          ]
        }
    },

    GetStudyList(){
        return {
            "data": [
              {
                "studyId": {
                  "primaryValue": 32,
                  "secondaryValue": null
                },
                "patientId": {
                  "primaryValue": 30,
                  "secondaryValue": null
                },
                "ageConstraintIds": {
                  "primaryValue": "4,6",
                  "secondaryValue": null
                },
                "studyStart": {
                  "primaryValue": "2021-01-15 13:29",
                  "secondaryValue": "2021-01-15T13:29:21.667Z"
                },
                "studyEnd": {
                  "primaryValue": "2021-01-15 13:59",
                  "secondaryValue": "2021-01-15T13:59:21.667Z"
                },
                "studyLength": {
                  "primaryValue": "30 minutes ",
                  "secondaryValue": "30 minutes "
                },
                "studyStatus": {
                  "primaryValue": "New",
                  "secondaryValue": "New"
                },
                "externalDatabase": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "name": {
                  "primaryValue": "TESTr, Test Test",
                  "secondaryValue": null
                },
                "dateOfBirth": {
                  "primaryValue": "1990-12-28",
                  "secondaryValue": "1990-12-28T09:50:04.063Z"
                },
                "identityString": {
                  "primaryValue": "TEST1",
                  "secondaryValue": null
                },
                "ageAtStudy": {
                  "primaryValue": "30 years",
                  "secondaryValue": "30 years"
                },
                "gestationalAgeAtBirth": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "correctedAgeAtStudy": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "postMenstrualAgeAtStudy": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "referrer": {
                  "primaryValue": "",
                  "secondaryValue": null
                },
                "clinicalComments": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "summary": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "diagnosticSignificance": [],
                "brainMriCt": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "clinicalDiagnosis": [],
                "episodeFrequency": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "functionalNeuroimaging": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "lastEpisode": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "medication": [],
                "medicationWithdrawal": [],
                "medicationAdministeredDuringTheRecording": [],
                "alertness": [
                  {
                    "primaryValue": "Awake",
                    "secondaryValue": "Awake"
                  }
                ],
                "studyType": {
                  "primaryValue": "Sleep deprived EEG",
                  "secondaryValue": "Sleep deprived EEG"
                },
                "indicationForEeg": [
                  {
                    "primaryValue": "Psychogenic non-epileptic seisure (PNES)",
                    "secondaryValue": "Psychogenic non-epileptic seisure (PNES)"
                  }
                ],
                "latestMeal": {
                  "primaryValue": "2021-01-15 08:20",
                  "secondaryValue": "2021-01-15T08:20:00Z"
                },
                "descriptionId": {
                  "primaryValue": 63,
                  "secondaryValue": null
                }
              },
              {
                "studyId": {
                  "primaryValue": 43,
                  "secondaryValue": null
                },
                "patientId": {
                  "primaryValue": 41,
                  "secondaryValue": null
                },
                "ageConstraintIds": {
                  "primaryValue": "4,6",
                  "secondaryValue": null
                },
                "studyStart": {
                  "primaryValue": "2021-01-15 13:29",
                  "secondaryValue": "2021-01-15T13:29:21.667Z"
                },
                "studyEnd": {
                  "primaryValue": "2021-01-15 13:59",
                  "secondaryValue": "2021-01-15T13:59:21.667Z"
                },
                "studyLength": {
                  "primaryValue": "30 minutes ",
                  "secondaryValue": "30 minutes "
                },
                "studyStatus": {
                  "primaryValue": "New",
                  "secondaryValue": "New"
                },
                "externalDatabase": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "name": {
                  "primaryValue": "Taylor, Billy Lee",
                  "secondaryValue": null
                },
                "dateOfBirth": {
                  "primaryValue": "1990-12-28",
                  "secondaryValue": "1990-12-28T09:50:04.063Z"
                },
                "identityString": {
                  "primaryValue": "IdentityString41",
                  "secondaryValue": null
                },
                "ageAtStudy": {
                  "primaryValue": "30 years",
                  "secondaryValue": "30 years"
                },
                "gestationalAgeAtBirth": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "correctedAgeAtStudy": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "postMenstrualAgeAtStudy": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "referrer": {
                  "primaryValue": "",
                  "secondaryValue": null
                },
                "clinicalComments": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "summary": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "diagnosticSignificance": [
                  {
                    "primaryValue": "Normal recording",
                    "secondaryValue": "Normal recording"
                  }
                ],
                "brainMriCt": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "clinicalDiagnosis": [],
                "episodeFrequency": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "functionalNeuroimaging": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "lastEpisode": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "medication": [],
                "medicationWithdrawal": [],
                "medicationAdministeredDuringTheRecording": [],
                "alertness": [
                  {
                    "primaryValue": "Not scored",
                    "secondaryValue": "Not scored"
                  },
                  {
                    "primaryValue": "Awake",
                    "secondaryValue": "Awake"
                  }
                ],
                "studyType": {
                  "primaryValue": "Standard EEG",
                  "secondaryValue": "Standard EEG"
                },
                "indicationForEeg": [
                  {
                    "primaryValue": "Research project",
                    "secondaryValue": "Research project"
                  }
                ],
                "latestMeal": {
                  "primaryValue": "2021-01-15 11:18",
                  "secondaryValue": "2021-01-15T11:18:00Z"
                },
                "descriptionId": {
                  "primaryValue": 64,
                  "secondaryValue": null
                }
              },
              {
                "studyId": {
                  "primaryValue": 26,
                  "secondaryValue": null
                },
                "patientId": {
                  "primaryValue": 24,
                  "secondaryValue": null
                },
                "ageConstraintIds": {
                  "primaryValue": "4,6",
                  "secondaryValue": null
                },
                "studyStart": {
                  "primaryValue": "2021-01-15 13:29",
                  "secondaryValue": "2021-01-15T13:29:21.667Z"
                },
                "studyEnd": {
                  "primaryValue": "2021-01-15 13:59",
                  "secondaryValue": "2021-01-15T13:59:21.667Z"
                },
                "studyLength": {
                  "primaryValue": "30 minutes ",
                  "secondaryValue": "30 minutes "
                },
                "studyStatus": {
                  "primaryValue": "New",
                  "secondaryValue": "New"
                },
                "externalDatabase": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "name": {
                  "primaryValue": "Taylor, Billy Lee",
                  "secondaryValue": null
                },
                "dateOfBirth": {
                  "primaryValue": "1990-12-28",
                  "secondaryValue": "1990-12-28T09:50:04.063Z"
                },
                "identityString": {
                  "primaryValue": "IdentityString24",
                  "secondaryValue": null
                },
                "ageAtStudy": {
                  "primaryValue": "30 years",
                  "secondaryValue": "30 years"
                },
                "gestationalAgeAtBirth": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "correctedAgeAtStudy": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "postMenstrualAgeAtStudy": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "referrer": {
                  "primaryValue": "",
                  "secondaryValue": null
                },
                "clinicalComments": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "summary": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "diagnosticSignificance": [],
                "brainMriCt": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "clinicalDiagnosis": [],
                "episodeFrequency": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "functionalNeuroimaging": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "lastEpisode": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "medication": [],
                "medicationWithdrawal": [],
                "medicationAdministeredDuringTheRecording": [],
                "alertness": [
                  {
                    "primaryValue": "Good cooperation",
                    "secondaryValue": "Good cooperation"
                  },
                  {
                    "primaryValue": "Oriented",
                    "secondaryValue": "Oriented"
                  }
                ],
                "studyType": {
                  "primaryValue": "Long term monitoring (LTM)",
                  "secondaryValue": "Long term monitoring (LTM)"
                },
                "indicationForEeg": [
                  {
                    "primaryValue": "Follow up EEG",
                    "secondaryValue": "Follow up EEG"
                  }
                ],
                "latestMeal": {
                  "primaryValue": "2021-01-14 05:49",
                  "secondaryValue": "2021-01-14T05:49:00Z"
                },
                "descriptionId": {
                  "primaryValue": null,
                  "secondaryValue": null
                }
              },
              {
                "studyId": {
                  "primaryValue": 25,
                  "secondaryValue": null
                },
                "patientId": {
                  "primaryValue": 23,
                  "secondaryValue": null
                },
                "ageConstraintIds": {
                  "primaryValue": "1,3,4,5,6",
                  "secondaryValue": null
                },
                "studyStart": {
                  "primaryValue": "2020-09-16 13:29",
                  "secondaryValue": "2020-09-16T13:29:21.667Z"
                },
                "studyEnd": {
                  "primaryValue": "2020-09-16 13:59",
                  "secondaryValue": "2020-09-16T13:59:21.667Z"
                },
                "studyLength": {
                  "primaryValue": "30 minutes ",
                  "secondaryValue": "30 minutes "
                },
                "studyStatus": {
                  "primaryValue": "New",
                  "secondaryValue": "New"
                },
                "externalDatabase": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "name": {
                  "primaryValue": "Jones, James Beth",
                  "secondaryValue": null
                },
                "dateOfBirth": {
                  "primaryValue": "2020-06-14",
                  "secondaryValue": "2020-06-14T09:50:04.063Z"
                },
                "identityString": {
                  "primaryValue": "IdentityString23",
                  "secondaryValue": null
                },
                "ageAtStudy": {
                  "primaryValue": "3 months, 4 weeks",
                  "secondaryValue": "3 months, 4 weeks"
                },
                "gestationalAgeAtBirth": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "correctedAgeAtStudy": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "postMenstrualAgeAtStudy": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "referrer": {
                  "primaryValue": "",
                  "secondaryValue": null
                },
                "clinicalComments": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "summary": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "diagnosticSignificance": [
                  {
                    "primaryValue": "Abnormal recording supporting: Acute seizures",
                    "secondaryValue": "Abnormal recording supporting: Acute seizures"
                  },
                  {
                    "primaryValue": "Abnormal recording supporting: Coma",
                    "secondaryValue": "Abnormal recording supporting: Coma"
                  }
                ],
                "brainMriCt": {
                  "primaryValue": "Not scored",
                  "secondaryValue": "Not scored"
                },
                "clinicalDiagnosis": [
                  {
                    "primaryValue": "Paratyphoid fever C",
                    "secondaryValue": "Paratyphoid fever C"
                  }
                ],
                "episodeFrequency": {
                  "primaryValue": "Not scored",
                  "secondaryValue": "Not scored"
                },
                "functionalNeuroimaging": {
                  "primaryValue": "Normal",
                  "secondaryValue": "Normal"
                },
                "lastEpisode": {
                  "primaryValue": "Not scored",
                  "secondaryValue": "Not scored"
                },
                "medication": [
                  {
                    "primaryValue": "ANTIHEMORRHAGICS",
                    "secondaryValue": "ANTIHEMORRHAGICS"
                  }
                ],
                "medicationWithdrawal": [
                  {
                    "primaryValue": "No Central Nervous system (CNS) modifying agents",
                    "secondaryValue": "No Central Nervous system (CNS) modifying agents"
                  }
                ],
                "medicationAdministeredDuringTheRecording": [
                  {
                    "primaryValue": "BLOOD SUBSTITUTES AND PERFUSION SOLUTIONS",
                    "secondaryValue": "BLOOD SUBSTITUTES AND PERFUSION SOLUTIONS"
                  }
                ],
                "alertness": [
                  {
                    "primaryValue": "Good cooperation",
                    "secondaryValue": "Good cooperation"
                  }
                ],
                "studyType": {
                  "primaryValue": "Intraoperative monitoring",
                  "secondaryValue": "Intraoperative monitoring"
                },
                "indicationForEeg": [
                  {
                    "primaryValue": "Epilepsy-related indications",
                    "secondaryValue": "Epilepsy-related indications"
                  }
                ],
                "latestMeal": {
                  "primaryValue": "2020-09-15 13:29",
                  "secondaryValue": "2020-09-15T13:29:21.667Z"
                },
                "descriptionId": {
                  "primaryValue": 34,
                  "secondaryValue": null
                }
              },
              {
                "studyId": {
                  "primaryValue": 12,
                  "secondaryValue": null
                },
                "patientId": {
                  "primaryValue": 10,
                  "secondaryValue": null
                },
                "ageConstraintIds": {
                  "primaryValue": "4,6",
                  "secondaryValue": null
                },
                "studyStart": {
                  "primaryValue": "2020-08-25 14:30",
                  "secondaryValue": "2020-08-25T14:30:05Z"
                },
                "studyEnd": {
                  "primaryValue": "2020-08-25 15:50",
                  "secondaryValue": "2020-08-25T15:50:05Z"
                },
                "studyLength": {
                  "primaryValue": "1 hour 20 minutes ",
                  "secondaryValue": "1 hour 20 minutes "
                },
                "studyStatus": {
                  "primaryValue": "New",
                  "secondaryValue": "New"
                },
                "externalDatabase": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "name": {
                  "primaryValue": "RODRIGUEZAl, fred Judith",
                  "secondaryValue": null
                },
                "dateOfBirth": {
                  "primaryValue": "1996-09-15",
                  "secondaryValue": "1996-09-15T09:50:04.063Z"
                },
                "identityString": {
                  "primaryValue": "IdentityString10",
                  "secondaryValue": null
                },
                "ageAtStudy": {
                  "primaryValue": "23 years",
                  "secondaryValue": "23 years"
                },
                "gestationalAgeAtBirth": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "correctedAgeAtStudy": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "postMenstrualAgeAtStudy": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "referrer": {
                  "primaryValue": "",
                  "secondaryValue": null
                },
                "clinicalComments": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "summary": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "diagnosticSignificance": [
                  {
                    "primaryValue": "Recording supporting: Other non-epileptic clinical episode",
                    "secondaryValue": "Recording supporting: Other non-epileptic clinical episode"
                  }
                ],
                "brainMriCt": {
                  "primaryValue": "Not scored",
                  "secondaryValue": "Not scored"
                },
                "clinicalDiagnosis": [
                  {
                    "primaryValue": "Typhoid fever",
                    "secondaryValue": "Typhoid fever"
                  }
                ],
                "episodeFrequency": {
                  "primaryValue": "Unknown",
                  "secondaryValue": "Unknown"
                },
                "functionalNeuroimaging": {
                  "primaryValue": "Not performed",
                  "secondaryValue": "Not performed"
                },
                "lastEpisode": {
                  "primaryValue": "<1 day",
                  "secondaryValue": "<1 day"
                },
                "medication": [
                  {
                    "primaryValue": "AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM",
                    "secondaryValue": "AGENTS ACTING ON THE RENIN-ANGIOTENSIN SYSTEM"
                  }
                ],
                "medicationWithdrawal": [
                  {
                    "primaryValue": "ANESTHETICS",
                    "secondaryValue": "ANESTHETICS"
                  }
                ],
                "medicationAdministeredDuringTheRecording": [
                  {
                    "primaryValue": "No Central Nervous system (CNS) modifying agents",
                    "secondaryValue": "No Central Nervous system (CNS) modifying agents"
                  }
                ],
                "alertness": [
                  {
                    "primaryValue": "Poor cooperation",
                    "secondaryValue": "Poor cooperation"
                  },
                  {
                    "primaryValue": "Awake",
                    "secondaryValue": "Awake"
                  }
                ],
                "studyType": {
                  "primaryValue": "Ambulatory recording",
                  "secondaryValue": "Ambulatory recording"
                },
                "indicationForEeg": [
                  {
                    "primaryValue": "Psychogenic non-epileptic seisure (PNES)",
                    "secondaryValue": "Psychogenic non-epileptic seisure (PNES)"
                  },
                  {
                    "primaryValue": "Unknown",
                    "secondaryValue": "Unknown"
                  },
                  {
                    "primaryValue": "Specific paediatric indications",
                    "secondaryValue": "Specific paediatric indications"
                  },
                  {
                    "primaryValue": "Other differential diagnostic questions",
                    "secondaryValue": "Other differential diagnostic questions"
                  }
                ],
                "latestMeal": {
                  "primaryValue": "2020-08-25 11:20",
                  "secondaryValue": "2020-08-25T11:20:05Z"
                },
                "descriptionId": {
                  "primaryValue": 39,
                  "secondaryValue": null
                }
              },
              {
                "studyId": {
                  "primaryValue": 17,
                  "secondaryValue": null
                },
                "patientId": {
                  "primaryValue": 15,
                  "secondaryValue": null
                },
                "ageConstraintIds": {
                  "primaryValue": "2,3,4,5,6",
                  "secondaryValue": null
                },
                "studyStart": {
                  "primaryValue": "2020-08-25 14:30",
                  "secondaryValue": "2020-08-25T14:30:05Z"
                },
                "studyEnd": {
                  "primaryValue": "2020-08-26 20:30",
                  "secondaryValue": "2020-08-26T20:30:05Z"
                },
                "studyLength": {
                  "primaryValue": "1 day 6 hours ",
                  "secondaryValue": "1 day 6 hours "
                },
                "studyStatus": {
                  "primaryValue": "New",
                  "secondaryValue": "New"
                },
                "externalDatabase": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "name": {
                  "primaryValue": "WILSON, Barbara Carolyn",
                  "secondaryValue": null
                },
                "dateOfBirth": {
                  "primaryValue": "2020-01-20",
                  "secondaryValue": "2020-01-20T09:50:04.063Z"
                },
                "identityString": {
                  "primaryValue": "IdentityString15",
                  "secondaryValue": null
                },
                "ageAtStudy": {
                  "primaryValue": "7 months",
                  "secondaryValue": "7 months"
                },
                "gestationalAgeAtBirth": {
                  "primaryValue": "25 weeks, 2 days",
                  "secondaryValue": "25 weeks, 2 days"
                },
                "correctedAgeAtStudy": {
                  "primaryValue": "3 months, 2 weeks",
                  "secondaryValue": "3 months, 2 weeks"
                },
                "postMenstrualAgeAtStudy": {
                  "primaryValue": "56 weeks, 3 days",
                  "secondaryValue": "56 weeks, 3 days"
                },
                "referrer": {
                  "primaryValue": "",
                  "secondaryValue": null
                },
                "clinicalComments": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "summary": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "diagnosticSignificance": [
                  {
                    "primaryValue": "Normal recording",
                    "secondaryValue": "Normal recording"
                  }
                ],
                "brainMriCt": {
                  "primaryValue": "Not scored",
                  "secondaryValue": "Not scored"
                },
                "clinicalDiagnosis": [
                  {
                    "primaryValue": "Paratyphoid fever, unspecified",
                    "secondaryValue": "Paratyphoid fever, unspecified"
                  }
                ],
                "episodeFrequency": {
                  "primaryValue": ">1 per hour",
                  "secondaryValue": ">1 per hour"
                },
                "functionalNeuroimaging": {
                  "primaryValue": "Normal",
                  "secondaryValue": "Normal"
                },
                "lastEpisode": {
                  "primaryValue": "<1 day",
                  "secondaryValue": "<1 day"
                },
                "medication": [
                  {
                    "primaryValue": "ANTITHROMBOTIC AGENTS",
                    "secondaryValue": "ANTITHROMBOTIC AGENTS"
                  }
                ],
                "medicationWithdrawal": [
                  {
                    "primaryValue": "No Central Nervous system (CNS) modifying agents",
                    "secondaryValue": "No Central Nervous system (CNS) modifying agents"
                  }
                ],
                "medicationAdministeredDuringTheRecording": [
                  {
                    "primaryValue": "Other",
                    "secondaryValue": "Other"
                  }
                ],
                "alertness": [
                  {
                    "primaryValue": "Asleep",
                    "secondaryValue": "Asleep"
                  },
                  {
                    "primaryValue": "Awake",
                    "secondaryValue": "Awake"
                  }
                ],
                "studyType": {
                  "primaryValue": "Wada test",
                  "secondaryValue": "Wada test"
                },
                "indicationForEeg": [
                  {
                    "primaryValue": "Clinical suspicion of epilepsy",
                    "secondaryValue": "Clinical suspicion of epilepsy"
                  },
                  {
                    "primaryValue": "Epilepsy-related indications",
                    "secondaryValue": "Epilepsy-related indications"
                  }
                ],
                "latestMeal": {
                  "primaryValue": "2020-08-25 13:50",
                  "secondaryValue": "2020-08-25T13:50:05Z"
                },
                "descriptionId": {
                  "primaryValue": 46,
                  "secondaryValue": null
                }
              },
              {
                "studyId": {
                  "primaryValue": 15,
                  "secondaryValue": null
                },
                "patientId": {
                  "primaryValue": 13,
                  "secondaryValue": null
                },
                "ageConstraintIds": {
                  "primaryValue": "4,6",
                  "secondaryValue": null
                },
                "studyStart": {
                  "primaryValue": "2020-08-25 14:30",
                  "secondaryValue": "2020-08-25T14:30:05Z"
                },
                "studyEnd": {
                  "primaryValue": "2020-08-26 14:30",
                  "secondaryValue": "2020-08-26T14:30:05Z"
                },
                "studyLength": {
                  "primaryValue": "1 day ",
                  "secondaryValue": "1 day "
                },
                "studyStatus": {
                  "primaryValue": "New",
                  "secondaryValue": "New"
                },
                "externalDatabase": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "name": {
                  "primaryValue": "JONES, Annie bilaspur",
                  "secondaryValue": null
                },
                "dateOfBirth": {
                  "primaryValue": "1959-05-03",
                  "secondaryValue": "1959-05-03T09:50:04.063Z"
                },
                "identityString": {
                  "primaryValue": "IdentityString13",
                  "secondaryValue": null
                },
                "ageAtStudy": {
                  "primaryValue": "61 years",
                  "secondaryValue": "61 years"
                },
                "gestationalAgeAtBirth": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "correctedAgeAtStudy": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "postMenstrualAgeAtStudy": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "referrer": {
                  "primaryValue": "",
                  "secondaryValue": null
                },
                "clinicalComments": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "summary": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "diagnosticSignificance": [
                  {
                    "primaryValue": "Recording with no definite abnormality",
                    "secondaryValue": "Recording with no definite abnormality"
                  }
                ],
                "brainMriCt": {
                  "primaryValue": "Normal",
                  "secondaryValue": "Normal"
                },
                "clinicalDiagnosis": [
                  {
                    "primaryValue": "Cholera, unspecified",
                    "secondaryValue": "Cholera, unspecified"
                  }
                ],
                "episodeFrequency": {
                  "primaryValue": "Not scored",
                  "secondaryValue": "Not scored"
                },
                "functionalNeuroimaging": {
                  "primaryValue": "Normal",
                  "secondaryValue": "Normal"
                },
                "lastEpisode": {
                  "primaryValue": "Ongoing",
                  "secondaryValue": "Ongoing"
                },
                "medication": [
                  {
                    "primaryValue": "ANTIHEMORRHAGICS",
                    "secondaryValue": "ANTIHEMORRHAGICS"
                  }
                ],
                "medicationWithdrawal": [
                  {
                    "primaryValue": "ANESTHETICS",
                    "secondaryValue": "ANESTHETICS"
                  }
                ],
                "medicationAdministeredDuringTheRecording": [
                  {
                    "primaryValue": "ANTIHEMORRHAGICS",
                    "secondaryValue": "ANTIHEMORRHAGICS"
                  }
                ],
                "alertness": [
                  {
                    "primaryValue": "Poor cooperation",
                    "secondaryValue": "Poor cooperation"
                  }
                ],
                "studyType": {
                  "primaryValue": "Ambulatory recording",
                  "secondaryValue": "Ambulatory recording"
                },
                "indicationForEeg": [
                  {
                    "primaryValue": "Follow up EEG",
                    "secondaryValue": "Follow up EEG"
                  }
                ],
                "latestMeal": {
                  "primaryValue": "2020-08-25 13:30",
                  "secondaryValue": "2020-08-25T13:30:05Z"
                },
                "descriptionId": {
                  "primaryValue": 44,
                  "secondaryValue": null
                }
              },
              {
                "studyId": {
                  "primaryValue": 13,
                  "secondaryValue": null
                },
                "patientId": {
                  "primaryValue": 11,
                  "secondaryValue": null
                },
                "ageConstraintIds": {
                  "primaryValue": "4,6",
                  "secondaryValue": null
                },
                "studyStart": {
                  "primaryValue": "2020-08-25 14:30",
                  "secondaryValue": "2020-08-25T14:30:05Z"
                },
                "studyEnd": {
                  "primaryValue": "2020-08-26 14:30",
                  "secondaryValue": "2020-08-26T14:30:05Z"
                },
                "studyLength": {
                  "primaryValue": "1 day ",
                  "secondaryValue": "1 day "
                },
                "studyStatus": {
                  "primaryValue": "New",
                  "secondaryValue": "New"
                },
                "externalDatabase": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "name": {
                  "primaryValue": "RODRIGUEZ, Karen Janet",
                  "secondaryValue": null
                },
                "dateOfBirth": {
                  "primaryValue": "1952-08-14",
                  "secondaryValue": "1952-08-14T09:50:04.063Z"
                },
                "identityString": {
                  "primaryValue": "IdentityString11",
                  "secondaryValue": null
                },
                "ageAtStudy": {
                  "primaryValue": "68 years",
                  "secondaryValue": "68 years"
                },
                "gestationalAgeAtBirth": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "correctedAgeAtStudy": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "postMenstrualAgeAtStudy": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "referrer": {
                  "primaryValue": "",
                  "secondaryValue": null
                },
                "clinicalComments": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "summary": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "diagnosticSignificance": [
                  {
                    "primaryValue": "Recording supporting: Psychogenic non-epileptic seisure (PNES)",
                    "secondaryValue": "Recording supporting: Psychogenic non-epileptic seisure (PNES)"
                  },
                  {
                    "primaryValue": "Recording supporting: Other non-epileptic clinical episode",
                    "secondaryValue": "Recording supporting: Other non-epileptic clinical episode"
                  },
                  {
                    "primaryValue": "Abnormal recording supporting: Focal central nervous system (CNS) dysfunction",
                    "secondaryValue": "Abnormal recording supporting: Focal central nervous system (CNS) dysfunction"
                  }
                ],
                "brainMriCt": {
                  "primaryValue": "Not performed",
                  "secondaryValue": "Not performed"
                },
                "clinicalDiagnosis": [
                  {
                    "primaryValue": "Tuberculosis of lung, confirmed by sputum microscopy withor without culture",
                    "secondaryValue": "Tuberculosis of lung, confirmed by sputum microscopy withor without culture"
                  }
                ],
                "episodeFrequency": {
                  "primaryValue": ">1 per hour",
                  "secondaryValue": ">1 per hour"
                },
                "functionalNeuroimaging": {
                  "primaryValue": "No data",
                  "secondaryValue": "No data"
                },
                "lastEpisode": {
                  "primaryValue": "<1 hr",
                  "secondaryValue": "<1 hr"
                },
                "medication": [
                  {
                    "primaryValue": "UROLOGICALS",
                    "secondaryValue": "UROLOGICALS"
                  }
                ],
                "medicationWithdrawal": [
                  {
                    "primaryValue": "PSYCHOLEPTICS",
                    "secondaryValue": "PSYCHOLEPTICS"
                  }
                ],
                "medicationAdministeredDuringTheRecording": [
                  {
                    "primaryValue": "IMMUNE SERA AND IMMUNOGLOBULINS",
                    "secondaryValue": "IMMUNE SERA AND IMMUNOGLOBULINS"
                  }
                ],
                "alertness": [
                  {
                    "primaryValue": "Disoriented",
                    "secondaryValue": "Disoriented"
                  }
                ],
                "studyType": {
                  "primaryValue": "ICU",
                  "secondaryValue": "ICU"
                },
                "indicationForEeg": [
                  {
                    "primaryValue": "Research project",
                    "secondaryValue": "Research project"
                  }
                ],
                "latestMeal": {
                  "primaryValue": "2020-08-25 14:10",
                  "secondaryValue": "2020-08-25T14:10:05Z"
                },
                "descriptionId": {
                  "primaryValue": 40,
                  "secondaryValue": null
                }
              },
              {
                "studyId": {
                  "primaryValue": 23,
                  "secondaryValue": null
                },
                "patientId": {
                  "primaryValue": 21,
                  "secondaryValue": null
                },
                "ageConstraintIds": {
                  "primaryValue": "4,6",
                  "secondaryValue": null
                },
                "studyStart": {
                  "primaryValue": "2020-08-25 14:30",
                  "secondaryValue": "2020-08-25T14:30:05Z"
                },
                "studyEnd": {
                  "primaryValue": "2020-08-26 14:30",
                  "secondaryValue": "2020-08-26T14:30:05Z"
                },
                "studyLength": {
                  "primaryValue": "1 day ",
                  "secondaryValue": "1 day "
                },
                "studyStatus": {
                  "primaryValue": "New",
                  "secondaryValue": "New"
                },
                "externalDatabase": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "name": {
                  "primaryValue": "LEE, Larry Mary",
                  "secondaryValue": null
                },
                "dateOfBirth": {
                  "primaryValue": "2004-06-16",
                  "secondaryValue": "2004-06-16T09:50:04.063Z"
                },
                "identityString": {
                  "primaryValue": "IdentityString21",
                  "secondaryValue": null
                },
                "ageAtStudy": {
                  "primaryValue": "16 years",
                  "secondaryValue": "16 years"
                },
                "gestationalAgeAtBirth": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "correctedAgeAtStudy": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "postMenstrualAgeAtStudy": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "referrer": {
                  "primaryValue": "",
                  "secondaryValue": null
                },
                "clinicalComments": {
                  "primaryValue": "string2",
                  "secondaryValue": null
                },
                "summary": {
                  "primaryValue": "eegSummary1",
                  "secondaryValue": null
                },
                "diagnosticSignificance": [
                  {
                    "primaryValue": "Normal recording",
                    "secondaryValue": "Normal recording"
                  }
                ],
                "brainMriCt": {
                  "primaryValue": "Normal",
                  "secondaryValue": "Normal"
                },
                "clinicalDiagnosis": [
                  {
                    "primaryValue": "Rash and other nonspecific skin eruption",
                    "secondaryValue": "Rash and other nonspecific skin eruption"
                  }
                ],
                "episodeFrequency": {
                  "primaryValue": ">1 per week",
                  "secondaryValue": ">1 per week"
                },
                "functionalNeuroimaging": {
                  "primaryValue": "Not performed",
                  "secondaryValue": "Not performed"
                },
                "lastEpisode": {
                  "primaryValue": "<1 week",
                  "secondaryValue": "<1 week"
                },
                "medication": [
                  {
                    "primaryValue": "ANTIPRURITICS, INCL. ANTIHISTAMINES, ANESTHETICS, ETC.",
                    "secondaryValue": "ANTIPRURITICS, INCL. ANTIHISTAMINES, ANESTHETICS, ETC."
                  }
                ],
                "medicationWithdrawal": [
                  {
                    "primaryValue": "ANTIHYPERTENSIVES",
                    "secondaryValue": "ANTIHYPERTENSIVES"
                  }
                ],
                "medicationAdministeredDuringTheRecording": [
                  {
                    "primaryValue": "ALLERGENS",
                    "secondaryValue": "ALLERGENS"
                  }
                ],
                "alertness": [
                  {
                    "primaryValue": "Not scored",
                    "secondaryValue": "Not scored"
                  }
                ],
                "studyType": {
                  "primaryValue": "Ambulatory recording",
                  "secondaryValue": "Ambulatory recording"
                },
                "indicationForEeg": [
                  {
                    "primaryValue": "Assessment of prognosis",
                    "secondaryValue": "Assessment of prognosis"
                  }
                ],
                "latestMeal": {
                  "primaryValue": "2018-10-25 13:00",
                  "secondaryValue": "2018-10-25T13:00:00Z"
                },
                "descriptionId": {
                  "primaryValue": 32,
                  "secondaryValue": null
                }
              },
              {
                "studyId": {
                  "primaryValue": 1,
                  "secondaryValue": null
                },
                "patientId": {
                  "primaryValue": 1,
                  "secondaryValue": null
                },
                "ageConstraintIds": {
                  "primaryValue": "4,6",
                  "secondaryValue": null
                },
                "studyStart": {
                  "primaryValue": "2020-08-25 14:30",
                  "secondaryValue": "2020-08-25T14:30:05Z"
                },
                "studyEnd": {
                  "primaryValue": "2020-08-26 15:35",
                  "secondaryValue": "2020-08-26T15:35:05Z"
                },
                "studyLength": {
                  "primaryValue": "1 day 1 hour 5 minutes ",
                  "secondaryValue": "1 day 1 hour 5 minutes "
                },
                "studyStatus": {
                  "primaryValue": "New",
                  "secondaryValue": "New"
                },
                "externalDatabase": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "name": {
                  "primaryValue": "TAYLOR, Mary MARTIN",
                  "secondaryValue": null
                },
                "dateOfBirth": {
                  "primaryValue": "1968-12-31",
                  "secondaryValue": "1968-12-31T09:50:04.063Z"
                },
                "identityString": {
                  "primaryValue": "IdentityString1",
                  "secondaryValue": null
                },
                "ageAtStudy": {
                  "primaryValue": "51 years",
                  "secondaryValue": "51 years"
                },
                "gestationalAgeAtBirth": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "correctedAgeAtStudy": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "postMenstrualAgeAtStudy": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "referrer": {
                  "primaryValue": "",
                  "secondaryValue": null
                },
                "clinicalComments": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "summary": {
                  "primaryValue": null,
                  "secondaryValue": null
                },
                "diagnosticSignificance": [
                  {
                    "primaryValue": "Abnormal recording supporting: Focal epilepsy, localized to the left temporal lobe",
                    "secondaryValue": "Abnormal recording supporting: Focal epilepsy, localized to the left temporal lobe"
                  },
                  {
                    "primaryValue": "Recording supporting: Other non-epileptic clinical episode",
                    "secondaryValue": "Recording supporting: Other non-epileptic clinical episode"
                  }
                ],
                "brainMriCt": {
                  "primaryValue": "Not scored",
                  "secondaryValue": "Not scored"
                },
                "clinicalDiagnosis": [
                  {
                    "primaryValue": "Hair colour and hair shaft abnormality, unspecified",
                    "secondaryValue": "Hair colour and hair shaft abnormality, unspecified"
                  }
                ],
                "episodeFrequency": {
                  "primaryValue": ">1 per day",
                  "secondaryValue": ">1 per day"
                },
                "functionalNeuroimaging": {
                  "primaryValue": "Normal",
                  "secondaryValue": "Normal"
                },
                "lastEpisode": {
                  "primaryValue": "Ongoing",
                  "secondaryValue": "Ongoing"
                },
                "medication": [
                  {
                    "primaryValue": "PREPARATIONS FOR TREATMENT OF WOUNDS AND ULCERS",
                    "secondaryValue": "PREPARATIONS FOR TREATMENT OF WOUNDS AND ULCERS"
                  }
                ],
                "medicationWithdrawal": [
                  {
                    "primaryValue": "No Central Nervous system (CNS) modifying agents",
                    "secondaryValue": "No Central Nervous system (CNS) modifying agents"
                  }
                ],
                "medicationAdministeredDuringTheRecording": [
                  {
                    "primaryValue": "PREPARATIONS FOR TREATMENT OF WOUNDS AND ULCERS",
                    "secondaryValue": "PREPARATIONS FOR TREATMENT OF WOUNDS AND ULCERS"
                  }
                ],
                "alertness": [
                  {
                    "primaryValue": "Not scored",
                    "secondaryValue": "Not scored"
                  },
                  {
                    "primaryValue": "Oriented",
                    "secondaryValue": "Oriented"
                  }
                ],
                "studyType": {
                  "primaryValue": "Sleep deprived EEG",
                  "secondaryValue": "Sleep deprived EEG"
                },
                "indicationForEeg": [
                  {
                    "primaryValue": "Unknown",
                    "secondaryValue": "Unknown"
                  }
                ],
                "latestMeal": {
                  "primaryValue": "2021-01-14 14:59",
                  "secondaryValue": "2021-01-14T14:59:00Z"
                },
                "descriptionId": {
                  "primaryValue": 1,
                  "secondaryValue": null
                }
              }
            ],
            "pagedMetaData": {
              "pageNumber": 1,
              "pageSize": 10,
              "nextPage": "http://api.f3.k.scoreeeg.com/api/v1/studyList?PageNumber=2&PageSize=10",
              "previousPage": null,
              "totalRecords": 41
            }
    }
  }
}