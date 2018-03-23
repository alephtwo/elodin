extern crate inflector;
extern crate rand;
use rand::{seq, thread_rng};
use inflector::Inflector;

fn main() {
    let noun = generate_word(include_str!("nouns.txt"));
    let adjective = generate_word(include_str!("adjectives.txt"));
    println!("{} {}", adjective, noun);
}

fn generate_word (text: &str) -> String {
    let words = text.trim().split("\n").collect();
    choose_word(words).to_title_case()
}

fn choose_word(words: Vec<&str>) -> &str {
    let mut rng = thread_rng();
    seq::sample_iter(&mut rng, words, 1).unwrap()[0]
}
