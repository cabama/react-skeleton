export const cabecera = {
    'Authorization': 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OWQ0YWFkMTc5OGEyODAwMTI4MDJiNGIiLCJpYXQiOjE1MjE0MjY0MzgsImV4cCI6MTUyNDAxODQzOH0.mIhoJEHYnvtGg1EvNeobeCQWzVQIdTmYwOmH56EthpsJQ-tdv_Gp_VhF3lsFh2xtlWLBxA3ZPaQDda_oSCQeCZ7Jp_xt3o_z9xSbn2QukP04Y1odZDujQzD6Huxt-y0YguRICNE5YhxiYb4InurVvHjvJTPE-3PWEQa0gNER29GhNR8_-i3KX5-x95nJMHykP2vsMAsxoO52U1llnY3-MFPOd2RGh6VW4DxsWhqFn6aWPtDhIqRvcev1hpthtXMsIi2BzpWzU2p50yB3_LiTV6ypybyPd2kfQjwQWy0V7978645iQ9lVaxEPjL49IL9VTxRblPt9wxES5j5DRdl7Ag'
}

export const miInit: RequestInit = {
    method: 'GET',
    headers: cabecera,
};

export default  () => {
    return fetch(
        'https://analytics.api.seedtag.com/stat/pivot?filters={%22token%22:{%22$in%22:[%225787-7593-01%22]},%22event%22:{%22$in%22:[%22adapter-response%22]}}&start=2018-03-18&end=2018-03-18&period=d&datasource=bidding&',
        miInit
    )
}