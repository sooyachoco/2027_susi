export const TARGET_REGIONS = ["서울", "경기", "인천"] as const;
export type TargetRegion = (typeof TARGET_REGIONS)[number];

export function isTargetRegion(region?: string): region is TargetRegion {
  return !!region && (TARGET_REGIONS as readonly string[]).includes(region);
}
