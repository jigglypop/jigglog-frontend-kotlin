import React from "react";
import Meta from "../components/common/meta/Meta";
import Write from "../components/write/Write";

export default function WritePage() {
  return (
    <div>
      <Meta description={"글쓰기"} />
      <Write />
    </div>
  );
}
