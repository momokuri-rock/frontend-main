import jQuery from 'jquery';
const $ = jQuery;

const ApiRequester = path => {
  return $.ajax({
    url:"http://localhost:3000/" + path,
    type: 'GET',
    data: {}
  });
}

export default ApiRequester;
