describe('ThirdParty.restaurantApi() 애스팩트', function () {
  var api = ThirdParty.restaurantApi();

  describe('getRestaurantsNearConference(cuisine)', function () {
    var returnFromUnderlyingFunction = '아무거',
        cuisine = '중화요리';
    beforeEach(function () {
      spyOn(api, 'getRestaurantsWithinRadius')
          .and.returnValue(returnFromUnderlyingFunction);
    });

    it('올바를 인자로 getRestaurantsWithinRadius를 호출한다', function () {
      api.getRestaurantsNearConference(cuisine);
      expect(api.getRestaurantsWithinRadius).toHaveBeenCalledWith('주소', 2.0, cuisine);
    });

    it('getRestaurantsWithinRadius로부터 받은 값을 반환한다', function () {
      var ret = api.getRestaurantsWithinRadius(cuisine);
      expect(ret).toBe(returnFromUnderlyingFunction);
    });
  });

});
