/**
 * Created by wsdrees on 1/22/14.
 */


function worldDisplay(world, xx, yy, character) {
var outpuString="";
    for(outer=0; outer<world.length; outer++){
        for(inner = 0; inner<world[outer].length; inner++){
            if(outer==yy && inner == xx){
                outpuString += character + "\t";
            }
            else
            {
                outputString = outputString + world[outer][inner] + "\t";
            }
        }
        outpuString+= "\n";     //Same as outputString=outputString + "/n;
    }
        return outpuString;
}