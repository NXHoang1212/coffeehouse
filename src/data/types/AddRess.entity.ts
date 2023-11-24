export interface AddRess extends AddRessState {
  _id: string;
  name: string;
  DescribeAddRess: string;
  Other: string;
  Gate: string;
  NoteOrther: string;
  userId: string;
  username: string;
  phone: string;
}

interface AddRessState {
  done: string;
}

export interface CreateAddRess {
  name: string;
  DescribeAddRess: string;
  Other: string;
  Gate: string;
  NoteOrther: string;
  userId: number;
  username: string;
  phone: string;
}
