import { ObservableStoreImpl } from '../Store/MobxStore';

export interface storeProps {
  store?: ObservableStoreImpl,
  setLoader?: (load: boolean) => boolean
}

export interface IsVisible{
  isVisible?: boolean,
  index: number
}

export interface Data {
  metaData: ColumnsMetaInformation,
  studyData: StudyData
}

export interface Token{
  authHeader: string
}
export interface StudyDataMapped {
  data: Map<number, DataEntity>
}
export interface StudyData {
  data: DataEntity[];
  pagedMetaData?: PagedMetaData;
}
export interface DataEntity {
  studyId?: ValuesNumber;
  patientId?: ValuesNumber;
  ageConstraintIds?: ValuesString;
  studyStart?: ValuesString;
  studyEnd?: ValuesString;
  studyLength?: ValuesString;
  studyStatus?: ValuesString;
  externalDatabase?: ValuesString;
  name?: ValuesString;
  dateOfBirth?: ValuesString;
  identityString?: ValuesString;
  ageAtStudy?: ValuesString;
  gestationalAgeAtBirth?: ValuesString;
  correctedAgeAtStudy?: ValuesString;
  postMenstrualAgeAtStudy?: ValuesString;
  referrer?: ValuesString;
  clinicalComments?: ValuesString;
  summary?: ValuesString;
  diagnosticSignificance?: DiagnosticSignificance[] | [];
  brainMriCt?: ValuesString;
  clinicalDiagnosis?: DiagnosticSignificance[] | [];
  episodeFrequency?: ValuesString;
  functionalNeuroimaging?: ValuesString;
  lastEpisode?: ValuesString;
  medication?: DiagnosticSignificance[] | [];
  medicationWithdrawal?: DiagnosticSignificance[] | [];
  medicationAdministeredDuringTheRecording?: DiagnosticSignificance[] | [];
  alertness?: DiagnosticSignificance[] | [];
  studyType?: ValuesString;
  indicationForEeg?: DiagnosticSignificance[] | [];
  latestMeal?: ValuesString;
  descriptionId?: ValuesNumber;
}

interface DiagnosticSignificance {
  primaryValue?: string;
  secondaryValue?: string;
}
export interface ValuesNumber {
  primaryValue?: number | null;
  secondaryValue?: number | null;
}
export interface ValuesString {
  primaryValue?: string | null;
  secondaryValue?: string | null;
}
export interface PagedMetaData {
  pageNumber?: number;
  pageSize?: number;
  nextPage?: string;
  previousPage?: string | null;
  totalRecords?: number;
}

export interface ColumnsMetaInformation {
  columnsMetaInformation?: columnsMeta[] | null;
  filterCriteria?: FilterCriteria[] | null;
  sortCriteria?: SortCriteriaEntity[] | null;
}

export interface EmptyInitialState {
  columnsMetaInformation?: ColumnsMetaInformation;
  studyData?: StudyData;
}

export interface columnsMeta {
  name?: Name;
  dataType?: number;
  propertyNameInternal?: string;
  propertyName?: string;
  order?: number;
  isVisible?: boolean;
  isFrozen?: boolean;
  isSearchable?: boolean;
  isMultiSelect?: boolean;
  isCategorical?: boolean;
  isACollection?: boolean;
  width?: number;
  endPoint?: string | null;
  isSortable?: boolean;
}
export interface Name {
  primaryValue?: string;
  secondaryValue?: string;
}

export interface FilterCriteria {
  conditions?: (ConditionsEntity)[] | null;
  nestedConditions?: (null)[] | null;
  operator?: number;
}
export interface ConditionsEntity {
  columnName?: string;
  dataType?: number;
  value?: string;
  conditionType?: number;
}
export interface SortCriteriaEntity {
  sortOrder?: number;
  columnName?: string;
  sortDirection?: number;
}
