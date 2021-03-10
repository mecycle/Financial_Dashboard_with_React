import { info } from "../data/info";
import { allocation } from "../data/allocation";
import { performance } from "../data/performance";
import { positions } from "../data/positions";
import { Allocation, Position } from "../data/models";

export function getFundInfo(): Promise<any> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(info);
    }, 500);
  })
}

export function getFundAllocation(): Promise<Allocation[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(allocation);
    }, 500);
  });
}

export function getPerformance(): Promise<string[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(performance);
    }, 500);
  })
}

export function getPositions(): Promise<Position[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(positions);
    }, 500);
  });
}
