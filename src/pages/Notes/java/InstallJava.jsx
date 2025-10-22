// src/pages/Notes/InstallJava.jsx
import React from "react";

export default function InstallJava() {
    return (
        <div style={{ fontFamily: "Arial", lineHeight: 1.8, padding: "1.5rem", maxWidth: 900, margin: "auto" }}>
            <h1>Installing Java & Setting PATH</h1>

            <p>
                This guide covers installing the Java Development Kit (JDK), choosing a version,
                and configuring your environment variables (PATH and JAVA_HOME) on Windows, macOS and Linux.
                It is written for beginners — every step has commands you can copy and try.
            </p>

            <h2>Why JDK, JRE and JAVA_HOME matter</h2>
            <ul>
                <li>
                    <strong>JDK</strong> (Java Development Kit) contains the compiler (<code>javac</code>), the runtime
                    and tools used to develop Java applications.
                </li>
                <li>
                    <strong>JRE</strong> (Java Runtime Environment) only contains what you need to run Java programs,
                    not to compile them. Most developers install the JDK.
                </li>
                <li>
                    <strong>JAVA_HOME</strong> is an environment variable that points to the JDK installation folder.
                    Many tools (Maven, Gradle, IDEs) use it to find Java.
                </li>
            </ul>

            <h2>Which Java version should I install?</h2>
            <p>
                For learning and most production work, pick a Long-Term Support (LTS) release such as
                <strong> Java 17 or Java 21</strong>. Newer non-LTS releases add features, but LTS versions provide stability and wider tool support.
            </p>

            <h2>Quick verification commands (use after install)</h2>
            <pre style={{ background: "#f6f7f8", padding: "0.75rem", borderRadius: 6 }}>
                {`java -version
javac -version`}
            </pre>

            <h2>1) Windows — Install & set PATH</h2>
            <p>Two common ways on Windows: use the official OpenJDK builds or a package manager.</p>

            <h3>a) Install using the official OpenJDK (manual)</h3>
            <ol>
                <li>Download an OpenJDK build (Adoptium Temurin, Amazon Corretto, Azul Zulu, or Oracle) — choose the Windows x64 MSI/ZIP for your OS.</li>
                <li>Run the MSI installer or extract the ZIP to a folder, for example: <code>C:\Java\jdk-17.0.8</code>.</li>
                <li>Open <strong>System Properties &gt; Advanced &gt; Environment Variables</strong> and add:
                    <ul>
                        <li><strong>JAVA_HOME</strong> =&nbsp;<code>C:\Java\jdk-17.0.8</code></li>
                        <li>Edit the <strong>Path</strong> system variable and add: <code>%JAVA_HOME%\\bin</code></li>
                    </ul>
                </li>
                <li>Open a new PowerShell or CMD and verify:
                    <pre style={{ background: "#f6f7f8", padding: "0.75rem", borderRadius: 6 }}>java -version</pre>
                </li>
            </ol>

            <h3>b) Install using Chocolatey (package manager)</h3>
            <p>(Requires admin PowerShell)</p>
            <pre style={{ background: "#f6f7f8", padding: "0.75rem", borderRadius: 6 }}>
                {`choco install temurin17 -y
# or choco install openjdk --version=17.0.8 -y`}
            </pre>
            <p>Chocolatey typically adjusts PATH automatically. Verify with <code>java -version</code>.</p>

            <h2>2) macOS — Install & set PATH</h2>
            <p>macOS has multiple easy options: Homebrew or SDKMAN (recommended for managing multiple JDKs).</p>

            <h3>a) Homebrew (simple)</h3>
            <pre style={{ background: "#f6f7f8", padding: "0.75rem", borderRadius: 6 }}>
                {`brew install openjdk@17
# you may need to follow brew's advice to add to your shell profile, for example:
# sudo ln -sfn /usr/local/opt/openjdk@17 /Library/Java/JavaVirtualMachines/openjdk-17.jdk
# Then add to ~/.zshrc or ~/.bash_profile:
# export JAVA_HOME="/usr/local/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home"
# export PATH="$JAVA_HOME/bin:$PATH"`}
            </pre>

            <h3>b) SDKMAN (best for developers who switch versions)</h3>
            <pre style={{ background: "#f6f7f8", padding: "0.75rem", borderRadius: 6 }}>
                {`# install SDKMAN (one-time)
curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"

# list available jdks
sdk list java

# install a version (example: temurin 17)
sdk install java 17.0.8-tem

# switch to a version
sdk use java 17.0.8-tem`}
            </pre>
            <p>SDKMAN sets environment variables for you when switching versions — no manual PATH edits required.</p>

            <h2>3) Linux — Install & set PATH</h2>
            <p>On Linux there are also choices: package manager for system-wide installs or SDKMAN for per-user management.</p>

            <h3>a) Debian/Ubuntu (APT)</h3>
            <pre style={{ background: "#f6f7f8", padding: "0.75rem", borderRadius: 6 }}>
                {`sudo apt update
sudo apt install openjdk-17-jdk -y

# verify
java -version
javac -version`}
            </pre>

            <h3>b) CentOS / RHEL (YUM / DNF)</h3>
            <pre style={{ background: "#f6f7f8", padding: "0.75rem", borderRadius: 6 }}>
                {`sudo dnf install java-17-openjdk-devel -y
# or on older yum systems:
# sudo yum install java-17-openjdk-devel -y`}
            </pre>

            <h3>c) Using SDKMAN on Linux</h3>
            <pre style={{ background: "#f6f7f8", padding: "0.75rem", borderRadius: 6 }}>
                {`curl -s "https://get.sdkman.io" | bash
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk install java 17.0.8-tem
sdk use java 17.0.8-tem`}
            </pre>

            <h2>4) Setting JAVA_HOME & PATH on macOS/Linux (manual)</h2>
            <p>If you installed a JDK manually, add these lines to your shell profile (<code>~/.bashrc</code>, <code>~/.zshrc</code>, or <code>~/.profile</code>):</p>
            <pre style={{ background: "#f6f7f8", padding: "0.75rem", borderRadius: 6 }}>
                {`# example for JDK installed at /usr/lib/jvm/java-17-openjdk-amd64
export JAVA_HOME="/usr/lib/jvm/java-17-openjdk-amd64"
export PATH="$JAVA_HOME/bin:$PATH"`}
            </pre>
            <p>Then run:</p>
            <pre style={{ background: "#f6f7f8", padding: "0.75rem", borderRadius: 6 }}>source ~/.bashrc  # or source ~/.zshrc</pre>

            <h2>5) Advanced: Managing multiple JDK versions</h2>
            <ul>
                <li><strong>SDKMAN</strong> (Linux/macOS) — recommended: <code>sdk install java &amp; sdk use java &lt;version&gt;</code></li>
                <li><strong>update-alternatives</strong> (Debian/Ubuntu) — system-wide switching:</li>
            </ul>
            <pre style={{ background: "#f6f7f8", padding: "0.75rem", borderRadius: 6 }}>
                {`sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/java-11-openjdk-amd64/bin/java 1100
sudo update-alternatives --install /usr/bin/java java /usr/lib/jvm/java-17-openjdk-amd64/bin/java 1700
sudo update-alternatives --config java
# repeat for javac if needed`}
            </pre>

            <h2>6) Troubleshooting common problems</h2>
            <h3>"java: command not found" or wrong version</h3>
            <ul>
                <li>Make sure your PATH contains the JDK <code>bin</code> (for Windows: <code>%JAVA_HOME%\\bin</code>, for Unix: <code>$JAVA_HOME/bin</code>).</li>
                <li>Open a new terminal after changing environment variables — changes do not affect already-open shells.</li>
                <li>On Windows check both user and system environment variables; PATH entries are merged — the first match wins.</li>
            </ul>

            <h3>IDE can't find Java (IntelliJ/Eclipse)</h3>
            <ul>
                <li>Point the IDE to the installed JDK path in settings (Project SDK / Installed JREs).</li>
                <li>For Gradle/Maven projects, set <code>org.gradle.java.home</code> in <code>gradle.properties</code> or configure JAVA_HOME used by the build tool.</li>
            </ul>

            <h3>Permission issues on Linux</h3>
            <p>If you put JDK in <code>/usr/lib/jvm</code> you might need <code>sudo</code> for installs. For per-user installs use <code>/home/username/.jdks</code> or SDKMAN.</p>

            <h2>7) Verifying deeper: javac and javap</h2>
            <p>
                Use these commands to check the compiler and inspect bytecode. Helpful for learning and debugging.
            </p>
            <pre style={{ background: "#f6f7f8", padding: "0.75rem", borderRadius: 6 }}>
                {`javac -version
javap -c SomeClass  # shows disassembled bytecode instructions`}
            </pre>

            <h2>8) Uninstalling Java</h2>
            <ul>
                <li>Windows: remove JDK folder and remove PATH/JAVA_HOME entries, or uninstall via Control Panel if you used an installer.</li>
                <li>macOS: if installed with Homebrew use <code>brew uninstall openjdk@17</code>; for manual removal delete the JDK bundle in <code>/Library/Java/JavaVirtualMachines/</code>.</li>
                <li>Linux: use your package manager, e.g., <code>sudo apt remove openjdk-17-jdk</code> or remove the SDKMAN-managed folder with <code>~/.sdkman</code>.</li>
            </ul>

            <h2>9) Quick checklists</h2>
            <h3>After installation</h3>
            <ol>
                <li>Open new terminal</li>
                <li>Run <code>java -version</code> and <code>javac -version</code></li>
                <li>Confirm <code>echo $JAVA_HOME</code> (Unix) or check system environment variables (Windows)</li>
            </ol>

            <h3>If tools fail (Maven/Gradle/IDE)</h3>
            <ol>
                <li>Ensure JAVA_HOME points to JDK (not JRE)</li>
                <li>Ensure PATH contains <code>$JAVA_HOME/bin</code></li>
                <li>Restart terminal / IDE</li>
            </ol>

            <h2>10) Next steps (recommended)</h2>
            <ul>
                <li>Write a small program, compile and run it: <code>javac Hello.java</code> and <code>java Hello</code>.</li>
                <li>Learn to use an IDE (IntelliJ IDEA / Eclipse) and point it to your JDK.</li>
                <li>Install SDKMAN if you plan to experiment with multiple Java versions.</li>
            </ul>

           
        </div>
    );
}
