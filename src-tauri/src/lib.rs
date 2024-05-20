// #[cfg_attr(mobile, tauri::mobile_entry_point)]


pub fn run() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![say_hello])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn say_hello() -> String {
  "Hello from Rust!".to_string()
}