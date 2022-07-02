import esriConfig from '@arcgis/core/config';
import Map from '@arcgis/core/Map';
import SceneView from '@arcgis/core/views/SceneView';
import MapView from '@arcgis/core/views/MapView';
import Home from '@arcgis/core/widgets/Home';

const config = {
  map: {
    basemap: 'satellite',
    ground: 'world-elevation',
  },
  view: {
    scale: 300000,
    center: [87.617733, 43.792818],
  },
};

esriConfig.assetsPath = '/assets';
esriConfig.apiKey = 'AAPK19a90e4f1d814e2d8ee6cab7805d3190-UxOAonaGldytxhS5MeRR70CiPjJtEgByAcuNkTzFLseWqD-l6C5wmLLJ4f_6JX4';

export const getMap = (option: any) => {
  const map = new Map({
    ...config.map,
    ...option.map,
  });

  const view = new MapView({
    map: map,
    ...config.view,
    ...option.view,
  });

  // map构造完成后的一些处理
  onMapLoad(view);

  return { map: map, view: view };
};

export const getScence = (option: any) => {
  const map = new Map({
    ...config.map,
    ...option.map,
  });

  const view = new SceneView({
    map: map,
    ...config.view,
    ...option.view,
  });

  // map构造完成后的一些处理
  onMapLoad(view);

  return { map: map, view: view };
};

// 构造完成后的一些处理
function onMapLoad(view) {
  view.ui.remove('attribution');

  const homeBtn = new Home({ view: view });
  view.ui.add(homeBtn, 'top-left');
}
