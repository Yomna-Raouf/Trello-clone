type ID = string;

export interface Resource8base {
  id: ID;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export interface Board extends Resource8base {
  title: string;
  order: string | Column[];

  // relationships
  image?: Partial<File>;
  tasks?: Partial<Task>[];
}

export interface Column {
  id: ID;
  title: string;
  taskUids: ID[];
}

export interface Task extends Resource8base {
  title: string;
  description: string;
  labels: Label[];
  dueAt: Date;

  // relationships
  board?: Partial<Board>;
  comments?: Partial<Comment>[];
}

export interface Comment extends Resource8base {
  message: string;

  // relationships
  task?: Partial<Task>;
}

type LabelColor =
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink";

export interface Label extends Resource8base {
  label: string;
  color: LabelColor;

  // relationships
  board?: Partial<Board>;
  tasks?: Partial<Task>[];
}

export interface File extends Resource8base {
  downloadStorageUrl: string;
  downloadUrl: string;
  filename: string;
  meta: {
    path: string;
    size: number;
    mimetype: string;
    workspaceId: string;
  };
  previewUrl: string;
  provider: string;
  public: boolean;
  shareUrl: string;
  uploadUrl: string;
  uploaded: boolean;
}