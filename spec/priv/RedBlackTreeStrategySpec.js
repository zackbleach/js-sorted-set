(function() {
  require(['priv/RedBlackTreeStrategy'], function(RedBlackTreeStrategy) {
    return StrategyHelper.describeStrategy('Left-leaning red-black tree-based strategy', RedBlackTreeStrategy);
  });

}).call(this);
