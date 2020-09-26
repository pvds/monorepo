'use strict';

const resolvedExtends = ['./config/es6-browser-recommended'].map((extend) =>
  require.resolve(extend)
);

module.exports = {
  extends: resolvedExtends,
};
