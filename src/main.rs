extern crate rand;
extern crate inflector;
use rand::{thread_rng, seq};
use inflector::Inflector;

fn main() {
    let nouns = parse_text(include_str!("nouns.txt"));
    let adjectives = parse_text(include_str!("adjectives.txt"));

    let noun = choose_word(nouns).to_title_case();
    let adjective = choose_word(adjectives).to_title_case();

    println!("{} {}", adjective, noun);
}

fn parse_text(text: &str) -> Vec<&str> {
    text.trim().split("\n").collect()
}

fn choose_word(words: Vec<&str>) -> &str {
    let mut rng = thread_rng();
    seq::sample_iter(&mut rng, words, 1).unwrap()[0]
}
