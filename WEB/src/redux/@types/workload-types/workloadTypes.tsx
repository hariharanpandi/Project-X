export interface CreateMapRequest {
    project_id: string,
    app_id: string,
    workload_name: string,
    nodes: any[],
    edges: any[],
  }  


export  interface CreateMapResponse{
status: number;
data?: {
    tenant_id: string;
    tenant_group_id: string;
    project_name: string;
    description: string;
    status: string;
    created_by_user_id: string;
    created_at: string;
    updated_by_user_id: string;
    updated_at: string;
    _id: string;
    __v: number;     
};
}
