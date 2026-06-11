use clap::Parser;
use inflector::Inflector;
use rand::rng;
use rand::seq::IndexedRandom;

fn main() {
    let args = Cli::parse();
    let words: Vec<String> = generate()
        .iter()
        .map(|w| {
            if args.slug {
                w.to_lowercase().replace(' ', "-").replace('\'', "")
            } else {
                w.to_title_case()
            }
        })
        .collect();

    println!("{}", words.join(if args.slug { "-" } else { " " }))
}

fn generate() -> Vec<&'static str> {
    let adjective = choose_word_from_file(include_str!("adjectives.txt"));
    let noun = choose_word_from_file(include_str!("nouns.txt"));
    vec![adjective, noun]
}

fn choose_word_from_file(text: &str) -> &str {
    let words: Vec<&str> = text.trim().split('\n').collect();
    words.choose(&mut rng()).unwrap_or(&"")
}

#[derive(Parser)]
#[command(version, about)]
struct Cli {
    /// Generate a slug instead of a name
    #[arg(long, short = 's')]
    slug: bool,
}
