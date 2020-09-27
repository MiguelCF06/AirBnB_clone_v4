$(document).ready(init);

function init () {
  const amenitiesChecked = {};
  $('.amenities .popover input').change(function () {
    if ($(this).is(':checked')) {
      amenitiesChecked[$(this).attr('data-name')] = $(this).attr('data-id');
    } else if ($(this).is(':not(:checked)')) {
      delete amenitiesChecked[$(this).attr('data-name')];
    }
    const names = Object.keys(amenitiesChecked);
    $('.amenities h4').text(names.sort().join(', '));
  });
}
