import { takeLatest, call, put } from "redux-saga/effects";

import { BASE_PROJECT_URL } from "../../../api/ApiPath";
import { endPoints } from "../../../api/EndPoints"
import { ProjectCreationResponse } from "../../@types/project-types/CreateProjectTypes";
import API from "../../axios";
import { CreateMapResponse } from "../../@types/workload-types/workloadTypes";
import { getQueryParam } from "../../../helper/SearchParams";
import { BASE_WORKLOAD_URL } from "../../../api/ApiPath";
import { renameRequest,renameFailure,renameSuccess } from "../../slice/workload-slice/renameWorkloadSlice";

function* handleRename(action:any) {
 

  const token = localStorage.getItem("token");
  const authToken = token?.replace(/"/g, "");
  
  try {
    const response:CreateMapResponse = yield call(API, {
      method: "PUT",
      url: `${BASE_WORKLOAD_URL}${endPoints.workload.renameWorkload}`,
      
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      data: action.payload
    });
    
    if(response) {

      const {data} = response;
      yield put(renameSuccess(data));
    } 
   

  } catch (err:any) {
  
    yield put(renameFailure(err?.response?.data));
  }
}


export function* watchRenameSaga() {
  yield takeLatest(renameRequest.type, handleRename);
}
