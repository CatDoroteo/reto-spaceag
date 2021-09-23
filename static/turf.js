import * as turf from '@turf/turf';

export default function checkIn(a, b) {
  var pt = turf.point(a);
  var poly = turf.polygon([b]);

  return turf.booleanPointInPolygon(pt, poly);
}
