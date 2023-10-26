"use client";

import React from "react";
import { getServerSession } from "next-auth";

type Props = {};

export default async function Page(props: Props) {
  const session = await getServerSession();
  return <div></div>;
}

// create table link
// https://www.youtube.com/watch?v=Jgr8JjYOJsU
// https://github.com/Elliott-Chong/shadcn-table-yt
