// #[cfg_attr(mobile, tauri::mobile_entry_point)]

use tauri::Manager;




pub fn run() {
  tauri::Builder::default()
    .invoke_handler(tauri::generate_handler![say_hello])
    .setup(|app| {
      
        let window = app.get_webview_window("main").expect("no main window");

            if !window.is_devtools_open(){
              window.open_devtools();
            }
         
      

      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}

#[tauri::command]
fn say_hello() -> String {
  "Hello from Rust!".to_string()
}