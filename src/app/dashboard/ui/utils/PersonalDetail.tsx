'use client';

import React from "react";
import { Text } from "rsuite";

export default function PersonalDetails({ title, name } :{
    title: string;
    name: string;
}) {
  return (
    <div>
      <div className="flex mt-1">
        <div className="min-w-60">
          <Text weight="thin" className="mr-1">
            {title}
          </Text>
        </div>

        <Text weight="bold"> {name}</Text>
      </div>
    </div>
  );
}


