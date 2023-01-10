import { createClient } from '@supabase/supabase-js'

const {
  AURORA_DATABASE_URL,
  AURORA_DATABASE_SECRET_API_KEY
} = process.env;

const supabase = createClient(DATABASE_URL, SUPABASE_SERVICE_API_KEY);

exports.handler = async event => {
  const { data, error } = await supabase
    .from('Orders')
    .insert([
      { requestor : 'Dr. John Doe' },
    ]);

  console.log(data, error);
}