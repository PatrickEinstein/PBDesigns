import HttpGetCallerWhole, { HttpOTHERcaller, HttpOTHERcallerForm } from "..";

export class GalleryFetches {
  CreateGalleryApi = async (payload: any) => {
    const res = await HttpOTHERcaller(
      `gallery`,
      {
        "Content-Type": "application/json",
      },
      "POST",
      payload
    );
    return res;
  };

  GetAllGallery = async ({
    page,
    pageSize,
  }: {
    page: string;
    pageSize: string;
  }) => {
    const res = await HttpGetCallerWhole(`gallery/${page}/${pageSize}`, {
      "Content-Type": "application/json",
    });
    return res;
  };

  DeleteGallery = async (_id: string) => {
    const res = await HttpOTHERcaller(
      `gallery/delete/${_id}`,
      {
        "Content-Type": "application/json",
      },
      "DELETE",
      {}
    );
    return res;
  };
}
