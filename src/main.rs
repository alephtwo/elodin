extern crate clap;
extern crate inflector;
extern crate rand;

use clap::{App, Arg};
use inflector::Inflector;
use rand::{seq, thread_rng};

fn main() {
    let matches = App::new("elodin")
        .version("0.4.0")
        .author("Ben Christianson <thhuntertgm@gmail.com>")
        .arg(
            Arg::with_name("slug")
                .short("s")
                .help("Generate a slug instead of a name"),
        )
        .get_matches();

    let slug = matches.is_present("slug");
    let joiner = if slug { "-" } else { " " };

    let words: Vec<String> = generate()
        .iter()
        .map(|w| {
            if slug {
                w.to_lowercase().replace(" ", "-").replace("'", "")
            } else {
                w.to_title_case()
            }
        })
        .collect();

    println!("{}", words.join(joiner))
}

fn generate() -> Vec<&'static str> {
    let noun = choose_word_from_file(include_str!("nouns.txt"));
    let adjective = choose_word_from_file(include_str!("adjectives.txt"));
    vec![noun, adjective]
}

fn choose_word_from_file(text: &str) -> &str {
    let words = text.trim().split("\n").collect();
    choose_random_word(words)
}

fn choose_random_word(words: Vec<&str>) -> &str {
    let mut rng = thread_rng();
    seq::sample_iter(&mut rng, words, 1).unwrap()[0]
}
