"use client";

import { Progress, HStack, VStack } from "rsuite";
import "rsuite/Stat/styles/index.css";
import "rsuite/StatGroup/styles/index.css";

import Stat from "rsuite/Stat";
import StatGroup from "rsuite/StatGroup";

import React from "react";

export default function TopAnalyis() {
  return (
    <div>
      
      <div className="">
        <StatGroup columns={3} spacing={10}>
          <Stat bordered>
            <Stat.Label>Total Visits</Stat.Label>
            <HStack spacing={10}>
              <Stat.Value>38,050</Stat.Value>
              <Stat.Trend>10%</Stat.Trend>
            </HStack>
          </Stat>

          <Stat bordered>
            <Stat.Label>Referals</Stat.Label>
            <HStack spacing={10}>
              <Stat.Value>4,635</Stat.Value>
              <Stat.Trend indicator="down">5%</Stat.Trend>
            </HStack>
          </Stat>

          <Stat bordered>
            <Stat.Label>Total Deliveries</Stat.Label>
            <HStack spacing={10}>
              <Stat.Value>2,800</Stat.Value>
              <Stat.Trend>10%</Stat.Trend>
            </HStack>
          </Stat>

        </StatGroup>
      </div>
    </div>
  );
}
