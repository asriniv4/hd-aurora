import { createClient } from '@supabase/supabase-js'

const {
  AURORA_DATABASE_URL,
  AURORA_DATABASE_SECRET_API_KEY
} = process.env;

const supabase = createClient(AURORA_DATABASE_URL, AURORA_DATABASE_SECRET_API_KEY);

exports.handler = async function (event, context) {
  let { data, error } = await supabase
    .from('orders')
    .select('requestor, model_type, status')

  console.log(data, error);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // TODO: Tighten security here
    },
    body: JSON.stringify({ data }),
  };
};
