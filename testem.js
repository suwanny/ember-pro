/* eslint-env node */
/* eslint camelcase:0 */
module.exports = {
  test_page: 'tests/index.html?hidepassed',
  disable_watching: true,
  launch_in_ci: [
    'PhantomJS'
  ],
  launch_in_dev: [
    'PhantomJS',
    'Chrome'
  ]
};
