# Calculation denied with "qsub: script contains cr, lf" or fails with "^M: command not found" and "$'\r': command not found"

... or a similar type of error.

The described problem is caused by the fact that your batch script was written in a non-Unix operational system (Windows), which uses different characters to mark the end of a line. The `qsub` command detects these characters automatically and does not accept the job. In general, all text files edited/created in Windows and used during the calculation (so not only submitted shell scripts) can contain incompatible characters and cause the job crach.

To get rid of the faulty endlines, use the `dos2unix` command:

    (BUSTER)user123@skirit:~$ dos2unix myscriph.sh

To test for the type of endlines, use the command `file`:

    (BUSTER)user123@skirit:~$ file myscriph.sh
    myscript.sh: UTF-8 Unicode text, with CRLF line terminators

If the `file` command reports `CRLF line terminators`, your script needs to be converted to run on Linux. 
