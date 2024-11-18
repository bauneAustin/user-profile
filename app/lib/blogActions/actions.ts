'use server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default async function getPosts() {
    const { data, error } = await supabase
        .from('blog')
        .select('*');

    if (error) {
        console.error(error);
        return [];
    }

    return data;
}
