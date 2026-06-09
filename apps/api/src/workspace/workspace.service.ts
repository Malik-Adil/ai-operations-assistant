type Workspace = {
    id: string;
    name: string;
    website: string;
    industry: string;
    size: string;
  };
  
  const workspaces: Workspace[] = [];
  
  export function createWorkspace(data: any) {
    const workspace: Workspace = {
      id: Math.random().toString(),
      name: data.companyName,
      website: data.website,
      industry: data.industry,
      size: data.size,
    };
  
    workspaces.push(workspace);
  
    return workspace;
  }