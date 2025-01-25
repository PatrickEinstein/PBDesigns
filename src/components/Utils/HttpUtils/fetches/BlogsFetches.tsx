import HttpGetCallerWhole, { HttpOTHERcaller, HttpOTHERcallerForm } from "..";

export class BlogsFetches {
  CreateGalleryApi = async (payload: any) => {
    const res = await HttpOTHERcaller(
      `api/blog`,
      {
        "Content-Type": "application/json",
      },
      "POST",
      payload
    );
    return res;
  };

  GetAllGallery = async ({ page, pageSize }: Props) => {
    const res = await HttpGetCallerWhole(`api/blog/${page}/${pageSize}`, {
      "Content-Type": "application/json",
    });
    return res;
  };

  UpdateGallery = async (_id: string) => {
    const res = await HttpOTHERcaller(
      `delete/blog/update/${_id}`,
      {
        "Content-Type": "application/json",
      },
      "UPDATE",
      {}
    );
    return res;
  };
  DeleteGallery = async (_id: string) => {
    const res = await HttpOTHERcaller(
      `delete/blog/delete/${_id}`,
      {
        "Content-Type": "application/json",
      },
      "DELETE",
      {}
    );
    return res;
  };
}
