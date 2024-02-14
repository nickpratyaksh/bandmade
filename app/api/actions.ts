"use server";

import Band from "../models/Band";

export async function createBand(formData: FormData) {
  const rawFormData = {
    name: formData.get("name"),
    icon_url: formData.get("icon_url"),
  };
  const band = await Band.create({
    name: rawFormData.name,
    icon_url: rawFormData.icon_url,
  });
}
